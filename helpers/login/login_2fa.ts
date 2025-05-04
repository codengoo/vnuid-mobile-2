import { IResponseLogin } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STG_AUTH_2FA_TOKEN, STG_AUTH_TOKEN } from '../constants';
import { axios } from '../network';

async function switchLogin(data: IResponseLogin, status: number) {
  switch (status) {
    case 200:
      await AsyncStorage.setItem(STG_AUTH_TOKEN, data.token);
      // navigationRef.navigate('Main');
      break;

    default:
      throw new Error('Could not login');
  }
}

export async function signInWithPass2Fa(password: string, save: boolean) {
  const _2faToken = await AsyncStorage.getItem(STG_AUTH_2FA_TOKEN);
  if (!_2faToken || _2faToken.trim() === '') {
    throw new Error('Missing 2fa token');
  }

  try {
    const response = await axios.post('/auth/login_pass_2fa', {
      token: _2faToken,
      password: password,
      save_device: save,
    });

    console.log(response.data);
    await switchLogin(response.data, response.status);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function signInWithCode2Fa(code: string, save: boolean) {
  try {
    const response = await axios.post('/auth/login_code_2fa_accept', {
      code: code,
      save_device: save,
    });

    console.log(response.data);
    await switchLogin(response.data, response.status);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function signInWithNfc2Fa(nfc: string, save: boolean) {
  try {
    const _2faToken = await AsyncStorage.getItem(STG_AUTH_2FA_TOKEN);
    if (!_2faToken || _2faToken.trim() === '') {
      throw new Error('Missing 2fa token');
    }

    const response = await axios.post('/auth/login_nfc_2fa', {
      token: _2faToken,
      nfc_code: nfc,
      save_device: save,
    });

    console.log(response.data);
    await switchLogin(response.data, response.status);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
