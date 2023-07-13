"use client";
import "./globals.css";
import { Layout, Nav } from "@douyinfe/semi-ui";
import Link from "next/link";
import {
  IconSemiLogo,
  IconEyeOpened,
  IconHome,
  IconWrench,
  IconGlobeStroke,
  IconSetting,
  IconArticle,
  IconMapPinStroked,
  IconBookOpenStroked,
} from "@douyinfe/semi-icons";

function NavLayout({ children }: { children: React.ReactNode }) {
  const { Sider } = Layout;
  return (
    <Layout
      style={{
        border: "1px solid var(--semi-color-border)",
        height: "100vh",
      }}
    >
      <Sider style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
        <Nav
          style={{ maxWidth: 200, height: "100%" }}
          defaultSelectedKeys={["Home"]}
          footer={{
            collapseButton: true,
          }}
          renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
            const routerMap: { [key: string]: string } = {
              Home: "/dashboard",
              Log: "/dashboard/log",
              Locate: "/dashboard/locate",
              CapacityStatus: "/dashboard/status/capacitystatus",
              PlanStatus: "/dashboard/status/planstatus",
              Pandora: "/dashboard/operate/pandora",
              Plan: "/dashboard/operate/plan",
              Platform: "/dashboard/platform",
              Knowlege: "/dashboard/knowlege",
              Users: "/dashboard/users",
              Notification: "/dashboard/notification",
            };
            let routePath: string;
            if (props.itemKey !== undefined) {
              routePath = routerMap[props.itemKey.toString()];
            } else {
              routePath = "";
            }
            let ref = routePath == "" ? false : routePath;
            return ref ? (
              <Link href={ref} legacyBehavior>
                {itemElement}
              </Link>
            ) : (
              <>{itemElement}</>
            );
          }}
          items={[
            {
              itemKey: "Home",
              text: "首页",
              icon: <IconHome size="large" />,
            },
            {
              itemKey: "Log",
              text: "值班日志",
              icon: <IconArticle size="large" />,
            },
            {
              itemKey: "Locate",
              text: "故障定位",
              icon: <IconMapPinStroked size="large" />,
            },
            {
              itemKey: "Status",
              text: "线上状态",
              icon: <IconEyeOpened size="large" />,
              items: [
                { itemKey: "CapacityStatus", text: "容量" },
                { itemKey: "PlanStatus", text: "预案" },
              ],
            },
            {
              itemKey: "Operate",
              text: "操作",
              icon: <IconWrench size="large" />,
              items: [
                { itemKey: "Pandora", text: "Pandora" },
                { itemKey: "Plan", text: "预案" },
              ],
            },
            {
              itemKey: "Platform",
              text: "平台导航",
              icon: <IconGlobeStroke size="large" />,
            },
            {
              itemKey: "Knowlege",
              text: "知识导航",
              icon: <IconBookOpenStroked size="large" />,
            },
            {
              itemKey: "Setting",
              text: "设置",
              icon: <IconSetting size="large" />,
              items: [
                { itemKey: "Users", text: "用户设置" },
                { itemKey: "Notification", text: "通知设置" },
              ],
            },
          ]}
        >
          <Nav.Header
            logo={<IconSemiLogo style={{ fontSize: 36 }} />}
            text="test"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Nav>
      </Sider>
    </Layout>
  );
}
export default NavLayout;
