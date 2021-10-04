import dateFormat from 'dateformat';
import {WorkExperience} from '../models/resume';
import {CategorizedSkill, Skill} from '../models/skill';
import {supabase} from '../utils/supabaseClient';

export const resumeProps = async () => {
  let {data: workExperiences} = await supabase
    .from<WorkExperience>('experience')
    .select('*')
    .eq('category', 'work')
    .order('id', {ascending: true});

  let {data: educationExperiences} = await supabase
    .from<WorkExperience>('experience')
    .select('*')
    .eq('category', 'education')
    .order('id', {ascending: true});

  let {data: skills} = await supabase.from<Skill>('skill').select('*');

  const categorizedSkills: CategorizedSkill[] =
    skills?.reduce(
      (acc: CategorizedSkill[], curr: Skill): CategorizedSkill[] => {
        const existingCategory = acc.find(
          category => category.category === curr.category,
        );

        if (existingCategory) {
          existingCategory.skills.push(curr);
        } else {
          acc.push({
            category: curr.category,
            skills: [curr],
          });
        }

        return acc;
      },
      [],
    ) ?? [];

  // Create category for active skills
  const activeSkills = skills?.filter(skill => skill.is_highlight) ?? [];

  // Set active skills as the first element
  categorizedSkills.unshift({
    category: 'highlights',
    skills: activeSkills,
  });

  const transformedWorkExperiences = workExperiences?.map(exp => {
    return {
      ...exp,
      start_date: dateFormat(exp.start_date, 'dd mmmm yyyy'),
      end_date: dateFormat(exp.end_date, 'dd mmmm yyyy'),
    };
  });

  const transformedEducationExperiences = educationExperiences?.map(exp => {
    return {
      ...exp,
      start_date: dateFormat(exp.start_date, 'dd mmmm yyyy'),
      end_date: dateFormat(exp.end_date, 'dd mmmm yyyy'),
    };
  });

  return {
    workExperiences: transformedWorkExperiences,
    educationExperiences: transformedEducationExperiences,
    skills: categorizedSkills as CategorizedSkill[],
  };
};
