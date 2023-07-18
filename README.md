<a name="readme-top"></a>

<!-- This readme is using the  Best-README-Template https://github.com/othneildrew/Best-README-Template -->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">YouTube Automation with Selenium and TypeScript</h3>

  <p align="center">
    UI end-to-end testing of a modern video platform using organized test cases, dependable interactions, and reusable components utilizing the Page Object pattern.
    <br />
    <br />
    <a href="https://github.com/hpetreski/selenium-typescript/issues">Report Bug</a>
    ·
    <a href="https://github.com/hpetreski/selenium-typescript/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project aims to display a possible UI end-to-end automation strategy when dealing with a modern video platform like Youtube.

It is leveraging the power of Selenium as a popular web automation framework, and TypeScript with its strongly typed syntax which will help us catch errors earlier during the development.

Using the Page Object Model (POM) design pattern, the project organizes test cases into modular and reusable components. This allows for easy maintenance, updates, and expansion of the test suite as the platform evolves.

Key Features:

- Automation of critical user interactions such as video search (login, playback, and channel navigation are planned in the future)
- Parallel execution for a faster test case execution.
- Configured linter, prettifier, and pre-commit hooks to make sure the committed code is cleaner 
- Reporting and logging mechanisms to provide detailed insights into test results and potential issues, using Allure and Spec.
- Detailed documentation in readmes and in the comments of the files.
    
As a testament to modern software development practices, this project aims to inspire confidence in quality assurance processes and contribute to the overall improvement of web application testing by following the best practices in automated testing.

### Built With
-   [![Selenium][Selenium]][Selenium-url]
-   [![Typescript][Typescript]][Typescript-url]
-   [![Mocha][Mocha]][Mocha-url]

<!-- GETTING STARTED -->

## Getting Started

To get the project up and running follow these steps.

### Prerequisites

Nodejs needs to be installed on your environment before running the project.

It can be downloaded from https://nodejs.org/en/download

### Installation
1. Clone the repo
    ```sh
    git clone https://github.com/hpetreski/selenium-typescript.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Run the project
    ```sh
    npm test
    ```

<!-- USAGE EXAMPLES -->

## Usage
#### Run tests
The project is run in parallel mode by default. It will use the spec reporter. You can run it with:
```sh
npm test
```
#### Sequential mode
The sequential mode will use the allure reporter and will serve the allure report that was generated after your test run finishes.

To run the project in the sequential mode you can run it with:
```sh
npm run test-sequential
```
#### Linter
You can also run the linter by running:
```sh
npm run lint
```
#### Prettifier
Or the prettifier by running:
```sh
npm run format
```

<!-- ROADMAP -->

## Roadmap

-   [x] Setting up Typescript
-   [x] Add page object model 
-   [x] Add linter, prettifier, and pre-commit hooks
-   [x] Add allure reporter
-   [x] Add parallel execution
-   [ ] Dockerize and setup the CI environment
-   [ ] Add a better roadmap
-   [ ] Add more test cases


See the [open issues](https://github.com/hpetreski/selenium-typescript/issues) for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/hpetreski/selenium-typescript?style=for-the-badge
[contributors-url]: https://github.com/hpetreski/selenium-typescript/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hpetreski/selenium-typescript?style=for-the-badge
[forks-url]: https://github.com/hpetreski/selenium-typescript/network/members
[stars-shield]: https://img.shields.io/github/stars/hpetreski/selenium-typescript?style=for-the-badge
[stars-url]: https://github.com/hpetreski/selenium-typescript/stargazers
[issues-shield]: https://img.shields.io/github/issues/hpetreski/selenium-typescript?style=for-the-badge
[issues-url]: https://github.com/hpetreski/selenium-typescript/issues
[license-shield]: https://img.shields.io/badge/LICENSE%20-%20MIT%20-%20?style=for-the-badge
[license-url]: https://github.com/hpetreski/selenium-typescript/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hpetreski
[Selenium]: https://img.shields.io/badge/Selenium%20-%20%233d3d3d?style=for-the-badge&logo=selenium
[Selenium-url]: https://www.selenium.dev/
[Typescript]: https://img.shields.io/badge/Typescript%20-%20%23071b77?style=for-the-badge&logo=typescript
[Typescript-url]: https://www.typescriptlang.org/
[Mocha]: https://img.shields.io/badge/Mocha%20-%20%233c1f1f?style=for-the-badge&logo=mocha
[Mocha-url]: https://mochajs.org/
