import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import ChartJS from "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";
import "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "F:/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.97/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("ECharts", ECharts);
    app.component("CodeDemo", CodeDemo);
    app.component("CodeTabs", CodeTabs);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    
  }
});