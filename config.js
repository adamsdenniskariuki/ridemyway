const config = {
        RMW_EXPRESS_PORT: process.env.RMW_EXPRESS_PORT || 3000,
        RMW_SECRET: process.env.RMW_SECRET || '76EC59D62E683F7698FE82721684E',
        RMW_DATABASE_URL: process.env.RMW_DATABASE_URL || '127.0.0.1:27017',
};

const development = {
    ...config,
    RMW_DATABASE_NAME: process.env.RMW_DATABASE_NAME || 'ridemyway_dev',
}

const testing = {
    ...config,
    RMW_DATABASE_NAME: process.env.RMW_DATABASE_NAME || 'ridemyway_test',
}

const production = {
    ...config,
    RMW_DATABASE_NAME: process.env.RMW_DATABASE_NAME || 'ridemyway',
}

const RMW_BUILD_ENV = process.env.RMW_BUILD_ENV || 'development';
let exportedConfig = development;
if(RMW_BUILD_ENV === 'production'){
    exportedConfig = production;
} else if(RMW_BUILD_ENV === 'testing') {
    exportedConfig = testing;
}

module.exports = exportedConfig;
