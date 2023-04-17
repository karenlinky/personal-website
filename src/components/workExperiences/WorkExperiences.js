import React from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import Card from '../card/Card';
import CardHeader from '../card/CardHeader';
import CardSubheader from '../card/CardSubheader';

const WorkExperiences = () => {
  const MetaDescription = <div>
    <div>Used ReactJS and Hack to build new features</div>
    <div>Built an alert inbox page using a new React component library</div>
    <div>Added a test-launch feature to the developer communication platform</div>
    <div>Added validations to restrict recipient type of a test-launch</div>
    <div>Added logic for message’s status check</div>
    <div>Designed the UI using Figma</div>
    <div>Added alert-template feature that allows users to create new alerts using templates</div>
  </div>;

  return (
    <ResponsivePage>
        <PageHeader label={'Work Experiences'}/>
        <Card className={'workExperiencesCard'} cardContentClassName={'workExperiencesContent'} expandableContent={MetaDescription}>
          <CardHeader>Meta, SWE Intern</CardHeader>
          <CardSubheader>Seattle</CardSubheader>
          <CardSubheader>2022 May - 2022 Aug</CardSubheader>
        </Card>
        <Card className={'workExperiencesCard'} cardContentClassName={'workExperiencesContent'} expandableContent={MetaDescription}>
          <CardHeader>Meta, SWE Intern</CardHeader>
          <CardSubheader>Seattle</CardSubheader>
          <CardSubheader>2022 May - 2022 Aug</CardSubheader>
        </Card>
        <Card className={'workExperiencesCard'} cardContentClassName={'workExperiencesContent'} expandableContent={MetaDescription}>
          <CardHeader>Meta, SWE Intern</CardHeader>
          <CardSubheader>Seattle</CardSubheader>
          <CardSubheader>2022 May - 2022 Aug</CardSubheader>
        </Card>
    </ResponsivePage>
  )
}

export default WorkExperiences