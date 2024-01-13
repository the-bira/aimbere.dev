"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var projects_1 = require("./collections/projects");
var db_postgres_1 = require("@payloadcms/db-postgres");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var path_1 = __importDefault(require("path"));
var media_1 = require("./collections/media");
var bundler_vite_1 = require("@payloadcms/bundler-vite");
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [
        projects_1.Projects,
        media_1.Media
    ],
    admin: {
        bundler: (0, bundler_vite_1.viteBundler)()
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_postgres_1.postgresAdapter)({
        pool: {
            connectionString: process.env.DATABASE_URI,
        },
    }),
    rateLimit: {
        max: 2000
    },
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    }
});
