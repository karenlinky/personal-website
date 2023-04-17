import React from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import Card from '../card/Card';
import CardHeader from '../card/CardHeader';
import CardContent from '../card/CardContent';

const WorkExperiences = () => {
  return (
    <ResponsivePage>
        <PageHeader label={'Work Experiences'}/>
        <Card className={'workExperiencesCard'}>
          <CardContent  className={'workExperiencesContent'}>
            <CardHeader>Meta, SWE Intern</CardHeader>
            <div>Seattle</div>
            <div>2022 May - 2022 Aug</div>
          </CardContent>
        </Card>
    </ResponsivePage>
  )
}

export default WorkExperiences