import fs from 'fs';
import path from 'path';

export interface IMetadata {
  version: string;
}

const versionEndpointPath = 'version';
const versionMetadataFile = 'metadata.json';
const packageJson = fs.readFileSync('./package.json', 'utf8');
const version = JSON.parse(packageJson).version || 0;
const programMetadata: IMetadata = { version };

fs.writeFileSync(
  path.resolve(versionEndpointPath, versionMetadataFile),
  JSON.stringify(programMetadata, null, 2),
  'utf8'
);
