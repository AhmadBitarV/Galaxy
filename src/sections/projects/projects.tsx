import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./projects.module.scss";
import Project from "./project/project";
import { projects } from "../../assets/projects";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./styles.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const Projects = () => {
  let content = [];
  content = projects.map((project) => {
    return (
      <SwiperSlide>
        <Project
          name={project.name}
          designer={project.designer}
          image={project.image}
          tech1={project.tech1}
          tech2={project.tech2}
          difficulty={project.difficulty}
          status={project.status}
        />
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },

          900: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 3,
          },

          1440: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 3,
          },

          1800: {
            slidesPerView: 5,
            spaceBetween: 0,
            slidesPerGroup: 5,
          },
        }}
      >
        <h2 className={styles.heading}>
          If It doesn't challenge you, it won't change you
        </h2>
        {content}
      </Swiper>
    </>
  );
};

export default Projects;
