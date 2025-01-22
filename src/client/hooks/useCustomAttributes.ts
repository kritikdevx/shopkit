'use client';

import { useAppDispatch, useAppSelector } from '../store';
import {
  setAttribute,
  setAttributes,
  removeAttribute,
} from '../store/slices/custom.slice';

export default function useCustomAttributes() {
  const { attributes } = useAppSelector((state) => state.custom);
  const dispatch = useAppDispatch();

  const setAttributeAction = (key: string, value: string) => {
    dispatch(setAttribute({ key, value }));
  };

  const setAttributesAction = (attributes: Record<string, string>) => {
    dispatch(setAttributes(attributes));
  };

  const removeAttributeAction = (key: string) => {
    dispatch(removeAttribute(key));
  };

  return {
    attributes,
    setAttribute: setAttributeAction,
    setAttributes: setAttributesAction,
    removeAttribute: removeAttributeAction,
  };
}
