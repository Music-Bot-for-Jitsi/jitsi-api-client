[comment]: <> "LTeX: language=en-US"
<!-- markdownlint-disable MD033 -->

<h1 align="center">
  Jitsi API Client
  <br />
</h1>

<h4 align="center">A typescript client for the jitsi api.</h4>

<p align="center">
  <a href="https://github.com/Music-Bot-for-Jitsi/jitsi-api-client/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Music-Bot-for-Jitsi/jitsi-api-client" />
  </a>
  <a href="https://github.com/Music-Bot-for-Jitsi/jitsi-api-client/stargazers">
      <img src="https://img.shields.io/github/stars/Music-Bot-for-Jitsi/jitsi-api-client" />
  </a>
  <a href="https://github.com/Music-Bot-for-Jitsi/jitsi-api-client/issues">
    <img src="https://img.shields.io/github/issues/Music-Bot-for-Jitsi/jitsi-api-client" />
  </a>
  <a href="https://meet.jit.si/">
    <img src="https://img.shields.io/badge/Built%20for-Jitsi%20Meet-5e87d4" />
  </a>
</p>

<h3 align="center">🔒 SonarCloud Monitored</h3>
<p align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jitsi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jitsi-api-client&metric=alert_status" alt="Quality Gate Status" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jitsi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jitsi-api-client&metric=sqale_rating" alt="Maintainability Rating" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jitsi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jitsi-api-client&metric=reliability_rating" alt="Reliability Rating" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jitsi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jitsi-api-client&metric=security_rating" alt="Security Rating" />
  </a>
</p>
<p align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jitsi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jitsi-api-client&metric=ncloc" alt="Lines of Code" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jitsi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jitsi-api-client&metric=vulnerabilities" alt="Vulnerabilities" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jitsi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jitsi-api-client&metric=sqale_index" alt="Technical Debt" />
  </a>
</p>
<p align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jitsi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jitsi-api-client&metric=code_smells" alt="Code Smells" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jitsi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jitsi-api-client&metric=duplicated_lines_density" alt="Duplicated Lines (%)" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jitsi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jitsi-api-client&metric=bugs" alt="Bugs" />
  </a>
</p>

## Summary

JitsiClient api client is a wrapper around the low-level Jitsi api. It is somewhat experimental because it uses a custom Web-RTC implementation and some polyfills to emulate enough from a browser to use the jitsi api client with deno inside a backend.

## Usage Example

```ts
import { JitsiClient } from 'https://deno.land/x/jitsi_api_client/mod.ts';

const client = await JitsiClient.join("meet.jit.si", "yourConferenceName");
// To register a new event listener use client.addConferenceEventListener
// See src/client.ts for code examples
```

For more information see [our examples folder](https://github.com/Music-Bot-for-Jitsi/jitsi-api-client/examples).
