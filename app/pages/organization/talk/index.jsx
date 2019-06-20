import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import counterpart from 'counterpart';
import TalkBreadcrumbs from '../../../talk/breadcrumbs';
import TalkSearchInput from '../../../talk/search-input';
import TalkFootnote from '../../../talk/footnote';

export default function OrgTalkPage(props) {
  const section = `org-${props.organization.id}`;
  const pageTitle = `${props.organization.display_name} » ${counterpart('orgTalk.title')}`;
  return (
    <div className="project-text-content talk project">
      <Helmet title={pageTitle} />
      <div className="content-container">
        <h1 className="talk-main-link">
          <Link to={`/organizations/${props.organization.slug}/talk`}>
            {props.organization.display_name} Talk
          </Link>
        </h1>
        <TalkBreadcrumbs {...props} />

        <TalkSearchInput {...props} />

        {React.cloneElement(props.children, { section, organization: props.organization, user: props.user })}

        <TalkFootnote />
      </div>
    </div>
  );
}
