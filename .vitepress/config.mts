import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Venom (毒液)",
    description: "致命精准的红队作战兵器。模块化集成资产发现、漏扫与利用，重新定义渗透测试工作流 (Workflow) 的新一代安全平台。 ",
    lastUpdated: true,
    themeConfig: {
        logo: { src: "/logo.png", width: 24, height: 24 },

        nav: [{ text: "指南", link: "/getting-started", activeMatch: "/.+" }],

        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        displayDetails: "显示详情",
                        footer: {
                            selectText: "选择",
                            selectKeyAriaLabel: "Enter 键",
                            navigateText: "切换",
                            navigateUpKeyAriaLabel: "向上箭头",
                            navigateDownKeyAriaLabel: "向下箭头",
                            closeText: "关闭",
                            closeKeyAriaLabel: "Esc 键",
                        },
                    },
                },
            },
        },
        sidebar: [
            {
                text: "简介",
                collapsed: false,
                items: [
                    { text: "什么是Venom?", link: "/what-is-venom" },
                    { text: "快速开始", link: "/getting-started" },
                ],
            },
            {
                text: "功能介绍",
                base: "/tools_",
                collapsed: false,
                items: [
                    { text: "端口扫描", link: "port_scan" },
                    { text: "空间测绘", link: "space_mapping" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/Zcentury/Venom" }],

        editLink: {
            pattern: "https://github.com/Zcentury/zcentury.github.io/edit/main/:path",
            text: "在 GitHub 上编辑此页面",
        },

        docFooter: {
            prev: "上一页",
            next: "下一页",
        },

        outline: {
            label: "页面导航",
        },

        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "full",
                timeStyle: "medium",
            },
        },

        notFound: {
            title: "页面未找到",
            quote: "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
            linkLabel: "前往首页",
            linkText: "带我回首页",
        },

        langMenuLabel: "多语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
        skipToContentLabel: "跳转到内容",
    },
});
