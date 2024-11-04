# about lingxi-web

[![Build Status][maven-build-image]][maven-build-url]
[![CodeCov][codecov-image]][codecov-url]
[![Maven Central][maven-central-image]][maven-central-url]
[![Release][release-image]][release-url]
[![License][license-image]][license-url]
[![Average Time to Resolve An Issue][percentage-of-issues-still-open-image]][percentage-of-issues-still-open-url]
[![Percentage of Issues Still Open][average-time-to-resolve-an-issue-image]][average-time-to-resolve-an-issue-url]
[![Twitter Follow][twitter-follow-image]][twitter-follow-url]

lingxi-web is a part of lingxi-iot.It supports international multilingual versions.

# Quick Start

## 1. Install

```bash
npm install
```

## 2. Run

```bash
npm run dev
```

## 3. i18n

### 3.1. Add i18n plugin in vscode

1. search 'Du-i18N' in extensions
2. install

### 3.2.edit 'du-i18n.config.json' file in root directory
```json
    {
	"quoteKeys": [
		"this.$t",
		"$t",
		"i18n.global.t"
	],
	"defaultLang": "zh",
	"tempLangs": [
		"zh",
		"en"
	],
	"langPaths": "**/src/i18n/locale/**",
	"transSourcePaths": "**/src/i18n/source/**",
	"tempPaths": "**/src/i18n/temp/**",
	"tempFileName": "",
	"multiFolders": [
		"src",
		"views"
	],
	"prefixKey": null,
	"uncheckMissKeys": [],
	"isSingleQuote": true,
	"isOnlineTrans": true,
	"baiduAppid": "Change to the Baidu developer account appid you applied for yourself",
	"baiduSecrectKey": "Change to the Baidu developer account SecrectKey that you applied for yourself"
}
```

[maven-build-image]: https://github.com/apache/rocketmq/actions/workflows/maven.yaml/badge.svg
[maven-build-url]: https://github.com/apache/rocketmq/actions/workflows/maven.yaml
[codecov-image]: https://codecov.io/gh/apache/rocketmq/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/apache/rocketmq
[maven-central-image]: https://maven-badges.herokuapp.com/maven-central/org.apache.rocketmq/rocketmq-all/badge.svg
[maven-central-url]: http://search.maven.org/#search%7Cga%7C1%7Corg.apache.rocketmq
[release-image]: https://img.shields.io/badge/release-download-orange.svg
[release-url]: https://www.apache.org/licenses/LICENSE-2.0.html
[license-image]: https://img.shields.io/badge/license-Apache%202-4EB1BA.svg
[license-url]: https://www.apache.org/licenses/LICENSE-2.0.html
[average-time-to-resolve-an-issue-image]: http://isitmaintained.com/badge/resolution/apache/rocketmq.svg
[average-time-to-resolve-an-issue-url]: http://isitmaintained.com/project/apache/rocketmq
[percentage-of-issues-still-open-image]: http://isitmaintained.com/badge/open/apache/rocketmq.svg
[percentage-of-issues-still-open-url]: http://isitmaintained.com/project/apache/rocketmq
[twitter-follow-image]: https://img.shields.io/twitter/follow/ApacheRocketMQ?style=social
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=ApacheRocketMQ
```
