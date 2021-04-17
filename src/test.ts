// Этот файл требуется karma.conf.js и рекурсивно загружает все файлы .spec и framework

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// К сожалению, для переменной `__karma__` нет набора текста. Просто объявите его как любой.
declare const __karma__: any;
declare const require: any;

// Предотвратить работу кармы преждевременно.
__karma__.loaded = function () {};

// Сначала инициализируйте среду тестирования Angular.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Тогда мы найдём все тесты.
const context = require.context('./', true, /\.spec\.ts$/);
// И загрузим модули.
context.keys().map(context);
// Наконец, начните карму, чтобы запустить тесты.
__karma__.start();
