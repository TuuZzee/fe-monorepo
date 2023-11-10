import { css } from 'styled-components';

import { colors } from './theme';

export const sharedGlobalStyles = css`
  root {
    font-size: 16px;
  }

  @media (480px < width < 801px) {
    :root {
      font-size: 0;
    }
  }

  @media (1px < width < 481px) {
    :root {
      font-size: 14px;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-style: normal;
    font-weight: normal;
  }

  .text-align-center {
    text-align: center;
  }

  .text-align-left {
    text-align: left;
  }

  .text-align-right {
    text-align: right;
  }

  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: ${colors.blackH000000};
    color: ${colors.whiteHFFFFFF};
    padding: 8px;
    z-index: 100;
  }

  .skip-link:focus {
    top: 0;
  }

  /*
  ** React Redux Toastr
  */
  .redux-toastr .toastr.rrt-info {
    background-color: #313437;
  }

  .redux-toastr .toastr.rrt-error {
    background-color: ${colors.redHE01E3C};
  }

  .redux-toastr .toastr.rrt-success {
    background-color: ${colors.greenH04E77F};
  }

  /*
  ** Nprogress
  */
  #nprogress .bar {
    background: ${colors.redHE01E3C};
  }

  #nprogress .peg {
    box-shadow: ${`0 0 10px ${colors.redHE01E3C}, 0 0 5px ${colors.redHE01E3C}`};
  }

  .rs-toggle.rs-toggle-lg.rs-toggle-checked .rs-toggle-presentation {
    background-color: ${colors.grayHE1DED6} !important;
  }

  .rs-toggle.rs-toggle-lg .rs-toggle-presentation {
    background-color: ${colors.blackH303234} !important;
  }
`;

export const tmp = 'tmp';
