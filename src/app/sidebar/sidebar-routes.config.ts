import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'material-icons' , iconName : 'home' },
    { path: 'showcase', title: 'Showcase', menuType: MenuType.LEFT, icon: 'material-icons' , iconName : 'games' },
    { path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'material-icons' , iconName : 'person' },
    { path: 'table', title: 'Table List', menuType: MenuType.LEFT, icon:'material-icons' , iconName : 'content_paste' },
    { path: 'typography', title: 'Typography', menuType: MenuType.LEFT, icon:'material-icons' , iconName : 'library_books' },
    { path: 'icons', title: 'Icons', menuType: MenuType.LEFT, icon:'material-icons' , iconName : 'bubble_chart' },
    { path: 'notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'material-icons text-gray' , iconName : 'notifications' }
];
