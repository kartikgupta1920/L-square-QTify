import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
import { useOutletContext } from "react-router-dom";

export default function HomePage(){
    const { data } = useOutletContext();
    const { newAlbums, topAlbums, songs } = data;

    return (
        <>
        <Hero/>
        <div className={styles.wrapper}>
            <Section tittle="TopAlbums" data={topAlbums} type="album" />
            <Section tittle="NewAlbums" data={newAlbums} type="album" />
            <Section
                tittle="Songs"
                data={songs}
                filterSource={fetchFilters}
                />
        </div>
        </>
    )
}