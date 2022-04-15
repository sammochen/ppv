import Color from 'color';
import {useState} from 'react';

type UserSetting = {
  name: string;
  abbreviation: string;
  color: Color;
};

const userSettings: UserSetting[] = [
  {
    name: 'Sam',
    abbreviation: 'SC',
    color: Color('#28965A'),
  },
  {
    name: 'Anubhav',
    abbreviation: 'AK',
    color: Color('#FE6847'),
  },
];

export const useAccount = () => {
  const [account, setAccount] = useState<string>('SC');

  const switchAccount = () => {
    setAccount(account === 'SC' ? 'AK' : 'SC');
  };

  const getUserSetting = (): UserSetting => {
    const userSetting = userSettings.find(setting => {
      return setting.abbreviation === account;
    });
    if (!userSetting) throw new Error('No user setting');
    return userSetting;
  };

  return {account, switchAccount, getUserSetting};
};
