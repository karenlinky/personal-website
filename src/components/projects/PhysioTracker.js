import React from "react";
import Chip from "../chip/Chip";
import ListItem1 from "../listItems/ListItem1";
import ProjectSection from "./ProjectSection";
import PhysioTrackerApp from "../../attachments/PhysioTrackerApp.apk";

import screenshot from "../../img/physioTracker.jpg";

const PhysioTracker = ({ imageOnLeft, id, openDetail, setProjectDetail }) => {
  const projectTitle = "Physio Tracker";
  const projectLink = "https://github.com/karenlinky/physio-tracker";
  const projectParticipationType = "Personal Project";
  const projectChips = (
    <>
      <Chip>Android App</Chip>
      <Chip>Java</Chip>
      <Chip>OOP</Chip>
      <Chip>Observer Design Pattern</Chip>
      <Chip>Singleton Design Pattern</Chip>
      <Chip>Room (Local Storgae)</Chip>
    </>
  );
  const projectDescr = (
    <>
      <div>
        As someone in the midst of physiotherapy, I've got a routine of over 10
        exercises scheduled 5 times a week. But I realized I've fallen into a
        bit of a habit - taking longer breaks between each exercise or set than
        I should. To help with this, I've developed an app that keeps track of
        how long I spend on each exercise and on breaks. It kindly reminds me
        with notifications when it's time to get back into my exercises.{" "}
        <a
          href={PhysioTrackerApp}
          target="_blank"
          rel="noreferrer"
          className={"downloadLink"}
        >
          {"Downloadable APK"}
        </a>
        <a></a>
      </div>
    </>
  );

  const projectInvolvement = (
    <div>
      <ListItem1 className={"lessSpaceListItem1"}>
        Managed the Exercise Progress Tracker using the Observer Design Pattern
        (with all UI elements being managed by an Observer, which gets notified
        on status-change and update the appearance of the UI elements
        accordingly)
      </ListItem1>
      <ListItem1>Used the Singleton Pattern to create the DB</ListItem1>
      <ListItem1>Used RecyclerView to display the list of exercises</ListItem1>
      <ListItem1>
        Used AlarmManager, BroadcastReceiver and Notification classes to
        schedule notifications
      </ListItem1>
    </div>
  );

  const projectImage = screenshot;
  return (
    <ProjectSection
      projectTitle={projectTitle}
      projectLink={projectLink}
      projectParticipationType={projectParticipationType}
      projectChips={projectChips}
      projectDescr={projectDescr}
      projectInvolvement={projectInvolvement}
      projectImage={projectImage}
      imageOnLeft={imageOnLeft}
      id={id}
      openDetail={openDetail}
      setProjectDetail={setProjectDetail}
    />
  );
};

export default PhysioTracker;
