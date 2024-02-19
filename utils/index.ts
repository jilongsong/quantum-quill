export const hotKey2String = (keys: (string | string[])[] = []): string => {
  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function processItem(item: string | string[]) {
    if (typeof item === 'string') {
      return capitalize(item);
    } else if (Array.isArray(item)) {
      return item.map((subItem) => capitalize(subItem)).join('/');
    }
  }

  if (Array.isArray(keys)) {
    return keys.map((item) => processItem(item)).join('+');
  }

  return capitalize(keys);
};

export const hotKey2Array = (keys: (string | string[])[] = []): (string | undefined)[] => {
  function capitalize(str: string): string {
    return str === ' ' ? 'Space' : str.charAt(0).toUpperCase() + str.slice(1);
  }

  function processItem(item: string | string[]) {
    if (typeof item === 'string') {
      return capitalize(item);
    } else if (Array.isArray(item)) {
      return item.map((subItem) => capitalize(subItem)).join(' / ');
    }
  }

  if (Array.isArray(keys)) {
    return keys.map((item) => processItem(item));
  }

  return [capitalize(keys)];
};

export function getURLParameter(parameterName: string) {
  const url = globalThis.location.href;

  // 获取问号后面的部分，即查询字符串
  const queryString = url.split('?')[1];

  // 如果没有查询字符串或参数名为空，返回 null
  if (!queryString || !parameterName) {
    return null;
  }

  // 将查询字符串拆解成键值对数组
  const queryParams = queryString.split('&');

  // 遍历数组，找到匹配的参数名，并返回对应的参数值
  for (const param of queryParams) {
    const [name, value] = param.split('=');
    if (name === parameterName) {
      return decodeURIComponent(value);
    }
  }

  // 如果未找到匹配的参数名，返回 null
  return null;
}

export const buildQueryString = (baseUrl: string, params: Record<string, any>) => {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  return `${baseUrl}?${queryString}`;
};
