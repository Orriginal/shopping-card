import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:5000',
    documents: './src/queries/*.ts',
    ignoreNoDocuments: true,
    generates: {
        './src/generated/Graphql.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                withHooks: true,
                withComponent: false,
                futureProofEnums: true,
            },
            presetConfig: {
                gqlTagName: 'gql',
                fragmentMasking: false,
            },
        },
    },
};

export default config;
