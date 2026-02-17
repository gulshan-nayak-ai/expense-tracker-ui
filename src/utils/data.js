import {
    LuLayoutDashboard,
    LuHandCoins,
    LuWalletMinimal,
    LuCalendarClock,
    LuLogOut
} from "react-icons/lu"


export const SIDE_MENU_DATA = [
    {
        id: "01",
        label: "dashboard",
        icon: LuLayoutDashboard,
        path: "/dashboard"
    },

    {
        id: "02",
        label: "expense",
        icon: LuHandCoins,
        path: "/income"
    },

    {
        id: "03",
        label: "future-expense",
        icon: LuCalendarClock,
        path: "/future-expense"
    },
    {
        id: "04",
        label: "income",
        icon: LuWalletMinimal,
        path: "/income"
    },

    {
        id: "05",
        label: "logout",
        icon: LuLogOut,
        path: "/logout"
    }
]