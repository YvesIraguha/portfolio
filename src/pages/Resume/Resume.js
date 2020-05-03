import React from 'react'
import './Resume.css'
import myBudget from '../../images/my_budget.png'
import companionDialogFlow from '../../images/companion_dialogflow.png'
import companionApp from '../../images/companionApp.png'
import authorsHeaven from '../../images/authors_heaven.png'

export default () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container v-centered">
        {/* Experience section  */}
        <h1 className="title is-3 has-text-centered">Experience</h1>
        <hr />
        <div className="columns">
          <div className="column has-text-right">
            <h3 className="subtitle is-4">2019 - Present</h3>
            <p className="subtitle is-5">Junior Software Engineer</p>
          </div>
          <div className="title-content-separator">
            <div className="circle"></div>
            <div className="rectangle"></div>
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-4">Andela</h3>
            <p className="item-description">
              As a Junior Software Engineer, I contribute to different teams
              which build different products ranging from mobile apps, using
              ReactNative technology, to web applications. I build back-end
              using Nodejs/Express and front-end using React & Redux, and
              HTML/CSS/JS in some instances.
            </p>
          </div>
        </div>
        <hr />

        {/* Education section  */}
        <h1 className="title is-3 has-text-centered">Education</h1>
        <hr />
        <div className="columns">
          <div className="column has-text-right">
            <h3 className="subtitle is-4">2017 - Present</h3>
            <p className="subtitle is-5">Bachelor's Degree</p>
          </div>
          <div className="title-content-separator">
            <div className="circle"></div>
            <div className="rectangle"></div>
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-4">
              Southern New Hampshire University - Kepler Program
            </h3>
            <p className="item-description">
              I am a student in the Bachelor of Arts in Management,
              concentration in Logistics and Operations. Through Kepler Program,
              I work on College for America projects, ranging from
              organizational effectiveness, to diversity at workplace.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right">
            <h3 className="subtitle is-4">2011 - 2016</h3>
            <p className="subtitle is-5">High School Diploma</p>
          </div>
          <div className="title-content-separator">
            <div className="circle"></div>
            <div className="rectangle"></div>
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-4">Minor Seminary St Pie X Nyundo</h3>
            <p className="item-description">
              I did Mathematics-Chemistry-Biology (MCB) as major, where I
              graduated with 73/73 as grade. I was awarded the Outstanding
              Performance in Rwanda National Examinations 2016 award, as a best
              performer in all sciences and humanities in Rwanda.
            </p>
          </div>
        </div>
        <hr />

        {/* Projects section  */}
        <h1 className="title is-3 has-text-centered">Projects</h1>
        <hr />
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <img
              src={myBudget}
              alt="Project Preview"
              className="project-image"
            />
          </div>
          <div className="column has-text-left project-right-item">
            <h3 className="subtitle is-4">PersonalFinance</h3>
            <p className="item-description">
              PersonalFinance is an application that help users to record
              expenses so that they can evaluate their spendings over time. You
              can use this product to record expenses as soon as you spend some
              money so that you can track how well you use random fund.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <img
              src={companionApp}
              alt="Project Preview"
              className="project-image"
            />
          </div>
          <div className="column has-text-left project-right-item">
            <h3 className="subtitle is-4">CompanionApp</h3>
            <p className="item-description">
              This is a mobile application that acts as your virtual buddy that
              allows you to book meeting rooms directly from your phone in
              Andela. I worked on CompanionApp, as a mobile engineer. I used
              ReactNative to contribute to the product.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <img
              src={companionDialogFlow}
              alt="Project Preview"
              className="project-image"
            />
          </div>
          <div className="column has-text-left project-right-item">
            <h3 className="subtitle is-4">Companion-DialogFlow-Service</h3>
            <p className="item-description">
              This is an intermediary service between DialogFlow and Google
              Calendar to support convergeCompanionApp. It is a webhook for
              DialogFlow integration with CompanionApp. This is a Nodejs/Express
              application that we built as an intermediary service.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <img
              src={authorsHeaven}
              alt="Project Preview"
              className="project-image"
            />
          </div>
          <div className="column has-text-left project-right-item">
            <h3 className="subtitle is-4">Author's Heaven</h3>
            <p className="item-description">
              Create a community of like minded authors to foster inspiration
              and innovation by leveraging the modern web.
            </p>
          </div>
        </div>
        <hr />
        {/* Skills section  */}
        <h1 className="title is-3 has-text-centered">SKills</h1>
        <hr />
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">Reactjs & Redux - Intermediate</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">Javascript - Proficient</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">
              ReactNative & Redux - Intermediate
            </h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">Git & GitHub - Proficient</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">NodeJs & ExpressJs - Proficient</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">Project Management - Proficient</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">HTML & CSS - Proficient</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">
              Test Driven Development - Proficient
            </h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">GraphQL - Beginner</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">DevOps - Intermediate</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">English - Proficient</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">French - Intermediate</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">Kinyarwanda - Professional</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">Kiswahili - Beginner</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
)
