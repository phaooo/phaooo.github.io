import dayjs from "dayjs";
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/ja';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import utc from "dayjs/plugin/utc";
import {defaultLang, t, type Lang} from '../i18n/utils';
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(advancedFormat)
dayjs.extend(utc);
dayjs.extend(localizedFormat)


export function formatDate(date, lang: Lang = defaultLang, dateType='post.dateFormat') {
  if (date) {
    const dateFormat = t(dateType, lang) || "YYYY-MM-DD";
    return dayjs(date).locale(lang).utc().format(dateFormat);
  } else {
    return ''
  }
}
