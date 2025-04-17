import Image from 'next/image';

type ProjectItemProps = {
  title: string;
  period: string;
  description: string;
  imageSrc: string;
  liveLink: string;
  codeLink: string;
  tags: string[];
};

const ProjectItem = ({ title, period, description, imageSrc, liveLink, codeLink, tags }: ProjectItemProps) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 w-full border-t border-black">
      {/* 이미지 영역 */}
      <div className="aspect-[4/3] xl:aspect-[5/3] w-full lg:border-r border-black overflow-hidden">
        <Image src={imageSrc} alt={title} width={1820} height={1214} className="w-full h-full object-cover" />
      </div>

      {/* 프로젝트 설명 */}
      <div className="container flex flex-col justify-between !gap-3 py-5 lg:border-r border-black">
        <strong className="text-2xl xl:text-[1.6rem] 2xl:text-[2vw] font-semibold">{title}</strong>
        <div>
          <span className="text-xs xl:text-sm underline">{period}</span>
          <p className="text-sm xl:text-base mt-0.5">{description}</p>
        </div>
      </div>

      {/* 링크 + 태그 */}
      <div className="container flex flex-col justify-between pb-5 lg:pt-5">
        {/* 링크 */}
        <div className="flex flex-col gap-1 text-sm xl:text-base lg:ml-auto">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[90px] xl:w-[104px] flex justify-between items-center"
          >
            View Live <span>→</span>
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[90px] xl:w-[104px] flex justify-between items-center"
          >
            View Code <span>→</span>
          </a>
        </div>

        {/* 태그 뱃지 */}
        <ul className="flex flex-wrap gap-2 text-xs xl:text-sm mt-5 lg:mt-3">
          {tags.map((tag, index) => {
            const isProjectType = tag === 'Team Project' || tag === 'Personal Project';
            return (
              <li key={index} className={`px-2 py-1 border border-black ${isProjectType ? 'bg-black text-white' : ''}`}>
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProjectItem;
