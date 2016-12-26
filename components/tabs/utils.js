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