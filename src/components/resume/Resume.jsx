
import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

import WorkExperience from "./WorkExperience";

function Resume() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {WorkExperience.map((experience, index) => {
                            const { id, company } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <Button>{company}</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {WorkExperience.map((experience) => {
                        const { id, company, yearsActive, title, information } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                            <h2 className="tab__panel-title">
                                {title} @ {company}
                            </h2>
                            <p className="tab__panel-subtitle">{yearsActive}</p>
                            <ul className="tab__panel-list">
                                {information.map((info, index) => {
                                const isLink = info.startsWith("http");
                                if (isLink) return null;
                                const nextItem = information[index + 1];
                                const hasLink = nextItem && nextItem.startsWith("http");

                                return (
                                    <li key={`info-${index}`}>
                                        {info}
                                        {hasLink && (
                                            <>
                                                {" - "}
                                                <a
                                                    href={nextItem}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ color: "#ff7e7eff", fontWeight: "bold" }}
                                                >
                                                    Verify Certificate
                                                </a>
                                            </>
                                        )}
                                    </li>
                                );
                                })}
                            </ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;