import {FaDev} from '@react-icons/all-files/fa/FaDev';
import {FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare';
import {FaGithubSquare} from '@react-icons/all-files/fa/FaGithubSquare';
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import {FaTwitterSquare} from '@react-icons/all-files/fa/FaTwitterSquare';
import NextLink from '../basic/NextLink';
import CustomIcon, {SocialMediaProps} from '../icon/CustomIcon';

export default function SocialMedia() {
  return (
    <div>
      <nav>
        <ul className="flex">
          {socialMedia.map(sm => (
            <li key={sm.title} className="mr-1">
              <NextLink
                href={sm.url}
                target="_blank"
                aria-label={sm.title}
                rel="nnoreferrer"
              >
                <CustomIcon {...sm} />
                <span aria-hidden className="hidden">
                  {sm.title}
                </span>
              </NextLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const socialMedia: SocialMediaProps[] = [
  {
    url: 'https://dev.to/codegino',
    icon: FaDev,
    title: 'dev',
    color: '',
    hoverColor: '#cccccc',
  },
  {
    url: 'https://github.com/codegino',
    icon: FaGithubSquare,
    title: 'github',
    color: '',
    hoverColor: '#cccccc',
  },
  {
    url: 'https://www.facebook.com/codegino',
    icon: FaFacebookSquare,
    title: 'facebook',
    color: '',
    hoverColor: '#1877f2',
  },
  {
    url: 'https://www.linkedin.com/in/carlogino/',
    icon: FaLinkedin,
    title: 'linkedin',
    color: '',
    hoverColor: '#0a66c2',
  },
  {
    url: 'https://twitter.com/code_gino',
    icon: FaTwitterSquare,
    title: 'twitter',
    color: '',
    hoverColor: '#1da1f2',
  },
];
