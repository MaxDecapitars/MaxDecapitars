import { startExperience } from '@/types/const';
import i18n from './i18n';

export function calculateExperience() {
  const elapsedDate = Date.now() - startExperience.valueOf(),
    years = Math.floor(elapsedDate / (1_000 * 60 * 60 * 24 * 30 * 12)),
    months = Math.floor(
      (elapsedDate % (1_000 * 60 * 60 * 24 * 30 * 12)) /
        (1_000 * 60 * 60 * 24 * 30)
    );

  let result = '';

  if (years > 0) {
    result += i18n.t('common.year', {
      count: years,
    });

    if (months > 0) {
      result +=
        ' ' +
        i18n.t('common.month', {
          count: months,
        });
    }
  } else
    result += i18n.t('common.month', {
      count: months,
    });

  return result;
}
