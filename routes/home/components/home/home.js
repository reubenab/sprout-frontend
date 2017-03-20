import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

import { Header } from 'components/header';
import { Wrapper } from 'components/wrapper';
import { Document } from 'components/document';
import { SidebarContent } from 'components/sidebar-content';
import { MainPanel } from 'components/main-panel';
// import { Sidebar } from 'components/sidebar';

const styles = {
  content: {
    padding: '16px',
  }
}

export class Home extends Component {

  // from home/containers/home.js - mapStateToProps() and mapDispatchToProps()
  render() {
    const {
      docText,
      onAddText
    } = this.props;

    var docId = this.props.location.query.docId;
    var userId = this.props.location.query.userId;

    var documents = [
      {id: 1, name: "ab"},
      {id: 2, name: "cd"}
    ];

    // return (
    //   <div>
    //     <Header/>

    //     <h2> Your Sprouts </h2>

    //     <Sidebar documents={documents} />

    //     <Wrapper title='Document'>
    //       <p> This is a Sprout document. </p>
    //       <Document text={docText} onAddText={onAddText} docId={docId} userId={userId} />
    //     </Wrapper>

    //   </div>
    // );

    const contentHeader = (
      <span> Sprout </span>
    );
    const sidebar = <SidebarContent documents={documents} />;
    const sidebarProps = {
      sidebar: sidebar,
      docked: true,
      sidebarClassName: 'custom-sidebar-class',
      open: false,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 40,
      transitions: false,
      onSetOpen: null
    };

    return (
      <Sidebar {...sidebarProps}>
        <MainPanel title={contentHeader} isSidebar={false}>
          <div style={styles.content}>
            <p> This is a Sprout document. </p>
            <Document text={docText} onAddText={onAddText} docId={docId} userId={userId} />
          </div>
        </MainPanel>
      </Sidebar>
    );
  }
}
