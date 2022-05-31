import React from 'react'
import BlogCard from '../blog-card/BlogCard'
import ProjectCard from '../project-card/ProjectCard'

type Props = {}

function ProjectList({ }: Props) {
  return (
    <div className="container animate">
      <div className="row">
        {
          [{
            title: "Antelope Canyon",
            subtitle: "Photography",
            url: "/project/antelope-anyon",
            image: {
              src: '/images/project-9.jpg',
              alt: 'Antelope Canyon',
            },
          }, {
            title: "Green Plant",
            subtitle: "Photography",
            url: "/project/antelope-anyon",
            image: {
              src: '/images/project-8.jpg',
              alt: 'Green Plant',
            },
          }, {
            title: "Quiet Lake",
            subtitle: "Photography",
            url: "/project/antelope-anyon",
            image: {
              src: '/images/project-7.jpg',
              alt: 'Quiet Lake',
            },
          },].map(({ title, subtitle, url, image }, index) => {
            return <ProjectCard
              title={title}
              url={url}
              image={image}
              subtitle={subtitle} />
          })
        }
      </div>
    </div>
  )
}

export default ProjectList
