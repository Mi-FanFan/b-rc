/**
 * Created by Freeman on 2016/12/22.
 */
export const setTransform = (style, v) => {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

export const isTransformSupported = (style) => (
  'transform' in style ||
  'webkitTransform' in style ||
  'mozTransform' in style
)

export const getScroll = (w,top) =>{
  let ret = w[`page${top? 'Y':'X'}Offset`];
  const method = `scroll${top?'Top':'Left'}`;
  if (typeof ret !== 'number'){
    ret = d.documentElement[method];
    if (typeof ret !== 'number'){
      ret = d.body[method];
    }
  }
  return ret;
}