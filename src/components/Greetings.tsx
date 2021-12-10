import React, {useState} from 'react';
import {BsChevronRight} from '@react-icons/all-files/bs/BsChevronRight';
import {BsTerminalFill} from '@react-icons/all-files/bs/BsTerminalFill';
import {Zoom} from 'react-awesome-reveal';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {GuideArrow} from './GuideArrow';

const StyledBsChevronRight = () => {
  return <BsChevronRight className="text-xl md:text-2xl" />;
};

export default function Greetings() {
  const [isTyping, setIsTyping] = useState(false);
  const {scrollToContent} = useScrollToView('#resume-summary');
  const [isGuideVisible, setIsGuideVisible] = useState(false);

  return (
    <div
      className="flex justify-center items-center h-screen w-full pt-20 relative overflow-hidden z-10"
      id="greetings"
    >
      <Zoom onVisibilityChange={e => setIsTyping(e)} triggerOnce>
        <div className="flex justify-center items-center h-screen w-screen pt-20 relative overflow-hidden">
          <div
            className="
            w-full m-2 sm:m-0 sm:w-terminal-sm md:w-terminal-md lg:w-terminal-lg
            rounded-lg overflow-hidden h-terminal-xs sm:h-terminal-sm
            text-xl leading-8 sm:text-4xl
          "
          >
            <div className="bg-light relative h-10 flex items-center pl-2">
              <div className="h-5 w-5 rounded-full mr-2 bg-red-500" />
              <div className="h-5 w-5 rounded-full mr-2 bg-yellow-300" />
              <div className="h-5 w-5 rounded-full mr-3 bg-green-600" />
              <div className="absolute w-full justify-self-center text-center font-mono text-xl sm:text-2xl">
                Greetings.sh
              </div>
              <BsTerminalFill />
            </div>
            <div className="h-full py-2 px-1 font-mono bg-dark text-light">
              {isTyping ? (
                <Typist
                  avgTypingDelay={0}
                  onTypingDone={() => setIsGuideVisible(true)}
                >
                  <StyledBsChevronRight />
                  <Typist.Delay ms={1200} />
                  <span>Hi! How are you?</span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <span>This is Carlo Gino, your Web</span>
                  <Typist.Delay ms={500} />
                  <span> developer</span>
                  <Typist.Delay ms={1000} />
                  <Typist.Backspace count={14} />
                  <span> Software developer</span>
                  <Typist.Delay ms={1200} />
                  <Typist.Backspace count={18} />{' '}
                  <span className="font-bold text-primary-light">
                    SOFTWARE ENGINEER
                  </span>
                  <Typist.Delay ms={200} />
                  <br />
                  <StyledBsChevronRight />
                  <span>who will make your software problems go away</span>
                  <Typist.Delay ms={1500} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <span>Got any ideas for a personal,</span>
                  <Typist.Delay ms={300} />
                  <span> business,</span>
                  <Typist.Delay ms={300} />
                  <span> or other uses?</span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <span>Let&lsquo;s make them come to existense!</span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <span>We&lsquo;ll create something marvelous together.</span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={1000} />
                  <span>Scroll down to know more about me...</span>
                </Typist>
              ) : null}
            </div>
          </div>
        </div>
      </Zoom>
      <div className="top-0 left-0 z-negative h-screen w-screen absolute bg-gradient-to-r from-light to-dark" />
      {isGuideVisible ? (
        <Zoom className="absolute bottom-8vh" triggerOnce>
          <GuideArrow onClick={scrollToContent} />
        </Zoom>
      ) : null}
    </div>
  );
}
