"use client";
import { FC } from "react";
import scss from "./Hero.module.scss";
import { useGet } from "@/entities/requests/get";
import Card from "@/shared/ui/card/Card";

const Hero: FC = () => {
  const { data } = useGet();
  return (
    <section className={scss.Hero}>
      <div className="container">
        <div className={scss.content}>
          {data?.data.map((el: FSD.FSDItem) => (
            <Card key={el._id} el={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
