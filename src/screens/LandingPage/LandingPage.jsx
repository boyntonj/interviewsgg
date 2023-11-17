import React from "react";
import { IconArrowTopRight2 } from "../../icons/IconArrowTopRight2";
import { IconBriefcaseOutline } from "../../icons/IconBriefcaseOutline";
import { IconGithub } from "../../icons/IconGithub";
import { IconYelp1 } from "../../icons/IconYelp1";
import { InterfaceEssentialFacebook } from "../../icons/InterfaceEssentialFacebook";
import { InterfaceEssentialLinkedin } from "../../icons/InterfaceEssentialLinkedin";
import { InterfaceEssentialTwitter } from "../../icons/InterfaceEssentialTwitter";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background">
      <div className="div">
        <div className="overlap">
          <div className="container" />
          <div className="enterprise-sales">
            <div className="overlap-group">
              <div className="signature-wrapper">
                <img className="signature" alt="Signature" src="https://c.animaapp.com/wDIICoke/img/signature.svg" />
              </div>
              <div className="text-wrapper">
                Enterprise
                <br />
                Sales
              </div>
            </div>
          </div>
          <img
            className="left-gray-diamond"
            alt="Left gray diamond"
            src="https://c.animaapp.com/wDIICoke/img/left-gray-diamond.png"
          />
          <img
            className="graysuit"
            alt="Graysuit"
            src="https://c.animaapp.com/wDIICoke/img/graysuit-awkwardsmile-cutout-1.png"
          />
          <div className="logs-bar">
            <div className="logos-bar">
              <div className="overlap-group-2">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <img
                  className="salesforce-svgrepo"
                  alt="Salesforce svgrepo"
                  src="https://c.animaapp.com/wDIICoke/img/salesforce-svgrepo-com-1.svg"
                />
                <img
                  className="zoom-svgrepo-com"
                  alt="Zoom svgrepo com"
                  src="https://c.animaapp.com/wDIICoke/img/zoom-svgrepo-com-1.svg"
                />
                <img
                  className="twilio-svgrepo-com"
                  alt="Twilio svgrepo com"
                  src="https://c.animaapp.com/wDIICoke/img/twilio-svgrepo-com-1.svg"
                />
                <img className="frame" alt="Frame" src="https://c.animaapp.com/wDIICoke/img/frame-1567.svg" />
                <img className="hubspot" alt="Hubspot" src="https://c.animaapp.com/wDIICoke/img/hubspot-1.svg" />
              </div>
            </div>
          </div>
          <div className="salary-popout">
            <div className="salary-popout-group">
              <div className="overlap-2">
                <img
                  className="gray-rectangle"
                  alt="Gray rectangle"
                  src="https://c.animaapp.com/wDIICoke/img/gray-rectangle.png"
                />
                <img
                  className="blue-rectange"
                  alt="Blue rectange"
                  src="https://c.animaapp.com/wDIICoke/img/blue-rectange.png"
                />
                <img
                  className="right-floater"
                  alt="Right floater"
                  src="https://c.animaapp.com/wDIICoke/img/rightfloater@2x.png"
                />
                <button className="search-button">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">Search</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="leadership-float">
            <div className="overlap-3">
              <div className="bank">
                <div className="vector-wrapper">
                  <img className="vector" alt="Vector" src="https://c.animaapp.com/wDIICoke/img/vector-5.svg" />
                </div>
              </div>
              <div className="text-wrapper-3">Management</div>
            </div>
          </div>
          <div className="hero-text">
            <p className="land-interviews-with">
              Land interviews with industry-leading
              <br />
              employers — and only pay if we deliver
            </p>
            <p className="landing-the">
              <span className="span">
                Landing <br />
                the interview
                <br />
              </span>
              <span className="text-wrapper-4">isn’t your job</span>
            </p>
            <div className="text-wrapper-5">But it is ours.</div>
          </div>
          <div className="logosmall">
            <img className="subtract" alt="Subtract" src="https://c.animaapp.com/wDIICoke/img/subtract-2.svg" />
            <div className="text-wrapper-6">interviews</div>
          </div>
          <div className="text-wrapper-7">Jobs</div>
          <div className="text-wrapper-8">Pricing</div>
          <div className="text-wrapper-9">Testimonials</div>
          <button className="login-button">
            <div className="overlap-4">
              <div className="text-wrapper-10">Login</div>
            </div>
          </button>
          <div className="text-wrapper-11">All-Time Performance</div>
          <div className="text-wrapper-12">updated daily</div>
          <div className="text-wrapper-13">How does this work?</div>
          <p className="create-your-profile">
            <span className="text-wrapper-14">
              Create your profile
              <br />
            </span>
            <span className="text-wrapper-15">
              Choose your industry and desired salary range, upload your resume, sync your <br />
              LinkedIn profile, and fill out the intake form.
            </span>
          </p>
          <p className="pick-a-placement">
            <span className="text-wrapper-14">
              Pick a placement package
              <br />
            </span>
            <span className="text-wrapper-15">
              Our team provides jobseekers with multiple avenues for increasing your land rate, <br />
              from a simple resume refresh to a full personal re-branding and interview coaching.
            </span>
          </p>
          <p className="wait-for-feedback-if">
            <span className="text-wrapper-14">
              Wait for feedback
              <br />
            </span>
            <span className="text-wrapper-15">
              If necessary, our team may suggest changes to your placement package and/or profile <br />
              to ensure a higher land rate. All jobseekers receive feedback within 24 hours.
            </span>
          </p>
          <p className="show-up-to-your">
            <span className="text-wrapper-14">
              Show up to your interviews
              <br />
            </span>
            <span className="text-wrapper-15">
              Most candidates land their first interview within two weeks. Lead time varies depending on
              <br />
              industry, seniority, and desired salary range.
              <br />
              <br />
            </span>
            <span className="text-wrapper-16">
              * Jobseekers are billed per interview scheduled. Don’t miss your interviews!
            </span>
          </p>
          <p className="repeat-steps-if">
            <span className="text-wrapper-14">
              Repeat steps 3-5 if necessary
              <br />
            </span>
            <span className="text-wrapper-15">
              Whether you’re looking for practice or trying to get a competitive offer, we’re happy to <br />
              hook you up with as many interviews as you need to land you dream job.{" "}
            </span>
          </p>
          <div className="line-chart">
            <div className="month-to-month-line">

              <div className="overlap-5">
                <div className="line">
                  <img className="img" alt="Line" src="https://c.animaapp.com/wDIICoke/img/line-43.svg" />
                  <img className="line-2" alt="Line" src="https://c.animaapp.com/wDIICoke/img/line-43.svg" />
                  <img className="line-3" alt="Line" src="https://c.animaapp.com/wDIICoke/img/line-43.svg" />
                  <img className="line-4" alt="Line" src="https://c.animaapp.com/wDIICoke/img/line-43.svg" />
                  <img className="line-5" alt="Line" src="https://c.animaapp.com/wDIICoke/img/line-43.svg" />
                  <img className="line-6" alt="Line" src="https://c.animaapp.com/wDIICoke/img/line-43.svg" />
                </div>
                <img className="vector-2" alt="Vector" src="https://c.animaapp.com/wDIICoke/img/vector-4.svg" />
                <img className="vector-3" alt="Vector" src="https://c.animaapp.com/wDIICoke/img/vector-3.svg" />
                <div className="elipes">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                  <div className="ellipse-5" />
                </div>
                <div className="tool-tip">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-17">Interviews</div>
                    <div className="text-wrapper-18">22</div>
                  </div>
                </div>
                <img className="line-7" alt="Line" src="https://c.animaapp.com/wDIICoke/img/line-52.svg" />
              </div>
              <div className="number">
                <div className="text-wrapper-19">50</div>
                <div className="text-wrapper-20">40</div>
                <div className="text-wrapper-21">30</div>
                <div className="text-wrapper-22">20</div>
                <div className="text-wrapper-23">10</div>
                <div className="text-wrapper-24">0</div>
              </div>
              <div className="time">
                <div className="text-wrapper-25">Jan</div>
                <div className="text-wrapper-26">Feb</div>
                <div className="text-wrapper-27">Mar</div>
                <div className="text-wrapper-28">Apr</div>
                <div className="text-wrapper-29">May</div>
                <div className="text-wrapper-30">Jun</div>
                <div className="text-wrapper-31">Jul</div>
                <div className="text-wrapper-32">Aug</div>
                <div className="text-wrapper-33">Sept</div>
                <div className="text-wrapper-34">Oct</div>
              </div>
              <div className="text-wrapper-35">Interviews Landed for Candidates</div>
            </div>
          </div>
          <div className="total-compensation">
            <div className="overlap-6">
              <div className="rectangle-3" />
              <div className="frame-2">
                <div className="frame-3">
                  <img
                    className="icon-arrow-top-right"
                    alt="Icon arrow bottom"
                    src="https://c.animaapp.com/wDIICoke/img/icon---arrow-bottom-right.svg"
                  />
                  <div className="text-wrapper-36">2.84%</div>
                </div>
                <div className="text-wrapper-37">since last month</div>
              </div>
            </div>
            <div className="frame-4">
              <div className="icon-briefcase-wrapper">
                <IconBriefcaseOutline className="icon-briefcase" color="#E1E1E1" />
              </div>
              <div className="frame-5">
                <div className="text-wrapper-38">142</div>
                <div className="text-wrapper-39">Interviews Secured</div>
              </div>
            </div>
            <img className="vector-4" alt="Vector" src="https://c.animaapp.com/wDIICoke/img/vector-1-3.svg" />
          </div>
          <div className="interviews-secured">
            <div className="overlap-7">
              <div className="rectangle-4" />
              <div className="frame-6">
                <div className="frame-3">
                  <IconArrowTopRight2 className="icon-arrow-top-right" color="#27AE60" />
                  <div className="text-wrapper-36">43.46%</div>
                </div>
                <div className="text-wrapper-37"> since last month</div>
              </div>
            </div>
            <div className="frame-7">
              <div className="element">$52,525,000</div>
              <div className="text-wrapper-39">in total compensation secured</div>
            </div>
            <img className="vector-4" alt="Vector" src="https://c.animaapp.com/wDIICoke/img/vector-1-3.svg" />
          </div>
          <div className="progressed-card">
            <div className="overlap-8">
              <div className="rectangle-5" />
              <div className="frame-8">
                <div className="frame-3">
                  <IconArrowTopRight2 className="icon-arrow-top-right" color="#27AE60" />
                  <div className="text-wrapper-36">0.46%</div>
                </div>
                <div className="text-wrapper-37">since last month</div>
              </div>
            </div>
            <div className="frame-9">
              <div className="element">92.42%</div>
              <div className="text-wrapper-40">progressed to second round</div>
            </div>
            <img className="vector-5" alt="Vector" src="https://c.animaapp.com/wDIICoke/img/vector-1-3.svg" />
          </div>
          <IconGithub className="icon-github" color="white" />
          <IconYelp1 className="icon-yelp" color="white" />
          <img className="vector-6" alt="Vector" src="https://c.animaapp.com/wDIICoke/img/vector-2.svg" />
          <div className="logosmall-2">
            <img className="subtract" alt="Subtract" src="https://c.animaapp.com/wDIICoke/img/subtract.svg" />
            <div className="text-wrapper-41">interviews</div>
          </div>
          <div className="text-wrapper-42">Menu</div>
          <div className="text-wrapper-43">Company</div>
          <div className="text-wrapper-44">Home</div>
          <div className="text-wrapper-45">Contact Us</div>
          <div className="text-wrapper-46">Search</div>
          <div className="text-wrapper-47">LinkedIn</div>
          <div className="text-wrapper-48">Testimonials</div>
          <div className="text-wrapper-49">Careers</div>
          <p className="bridging-the-gap">
            Bridging the gap between interviewers
            <br />
            and interviewees since 2023
          </p>
          <InterfaceEssentialLinkedin className="interface-essential" color="white" />
          <InterfaceEssentialTwitter className="interface-essential-twitter" color="white" />
          <InterfaceEssentialFacebook className="interface-essential-facebook" color="white" />
        </div>
        <img
          className="georgia-peach-logo"
          alt="Georgia peach logo"
          src="https://c.animaapp.com/wDIICoke/img/georgia-peach-logo-1.svg"
        />
        <div className="group">
          <div className="overlap-9">
            <div className="img-wrapper">
              <img className="vector-7" alt="Vector" src="https://c.animaapp.com/wDIICoke/img/vector-1.svg" />
            </div>
            <img className="vector-8" alt="Vector" src="https://c.animaapp.com/wDIICoke/img/vector.svg" />
          </div>
        </div>
        <div className="text-wrapper-50">Pricing</div>
        <div className="text-wrapper-51">Privacy Policy</div>
        <div className="text-wrapper-52">Recruiter Portal</div>
        <div className="text-wrapper-53">Terms of Use</div>
        <div className="text-wrapper-54">Jobseeker Portal</div>
        <p className="p">© Omnium, LLC 2023 | Atlanta, Georgia, USA</p>
      </div>
      </div>
    </div>
  );
};
