var config = {
    
    development: {
        id: 'project-name-dev',
        port: '3000',
        
        features: {
            reverse_proxy: {
                enabled: false
            },
            templating: {
                enabled: false,
            },
            db: {
                enabled: false,
                host: '',
                name: ''
            },
            ssl: {
                enabled: false,
                key: 'ssl/server.key',
                cert: 'ssl/server.crt',
                port: '8443'
            },
        }
    },

    production: {
        id: 'project-name-prod',
        port: '3000',
        
        features: {
            reverse_proxy: {
                enabled: false
            },
            templating: {
                enabled: false,
            },
            db: {
                enabled: false,
                host: '',
                name: ''
            },
            ssl: {
                enabled: false,
                key: '/etc/nginx/ssl/server.key',
                cert: '/etc/nginx/ssl/server.crt',
                port: '8443'
            },
        }
    },
};

module.exports = config;
