import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:5000',
    documents: './server/**/*.{ts,tsx}',
    generates: {
        'src/gql/': {
            config: {
                withHooks: true,
            },
            preset: 'client',
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
        },
    },
};

export default config;
