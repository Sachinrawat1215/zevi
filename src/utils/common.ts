export interface SidebarOption {
    title: string;
    optionsLabel: string[];
  }
  
  export const sidebarOptions: SidebarOption[] = [
    {
      title: 'BRAND',
      optionsLabel: ['Mango', 'H&M'],
    },
    {
      title: 'PRICE RANGE',
      optionsLabel: ['under 500', '1000 to 3000'],
    },
    {
      title: 'RATINGS',
      optionsLabel: ['5', '4', '3', '2', '1'],
    },
  ];
  