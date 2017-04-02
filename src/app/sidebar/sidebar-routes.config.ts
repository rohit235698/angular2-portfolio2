import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Projects', menuType: MenuType.LEFT, icon: 'material-icons' , iconName : 'library_books' },
    { path: 'about', title: 'About', menuType: MenuType.LEFT, icon:'material-icons' , iconName : 'person' }

];
