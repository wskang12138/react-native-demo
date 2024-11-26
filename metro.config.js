const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const config = {
    cacheStores: [
        new (require('metro-cache').FileStore)({
            root: path.join(__dirname, 'metro-cache'),
        }),
    ],
    transformer: {
        experimentalImportSupport: true,
        inlineRequires: true,
        minifierConfig: {
            mangle: {
                // 更改 `mangle` 配置以压缩输出
                toplevel: true,
                safari10: true,
            },
            compress: {
                // 启用一些压缩选项
                unused: true,
                dead_code: true,
                drop_debugger: true,
                conditionals: true,
                evaluate: true,
                sequences: true,
            },
            output: { comments: false },
            compress: { drop_console: true }
        },
    },
    resolver: {
        // 忽略测试文件
        blacklistRE: /.*\/__tests__\/.*/,
    },

};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
