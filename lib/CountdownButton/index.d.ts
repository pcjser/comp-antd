/// <reference types="react" />
import { ButtonProps } from 'antd/es/button';
interface CountdownButtonType extends Omit<ButtonProps, 'disabled' | 'onClick'> {
  /**
   * 最大秒数
   */
  maxSecondNum?: number;
  /**
   * 按钮默认文本
   */
  txt?: string;
  /**
   * 加载时按钮文本
   */
  loadingTxt?: string;
  /**
   * 禁用时按钮文本
   */
  disabledTxt?: (s: number) => string;
  /**
   * 点击按钮时触发的函数，其参数 completeCallback 需要在接口请求完毕后调用，用于告知组件接口请求已完成。
   */
  onClick: (completeCallback: () => void) => void;
}
declare function CountdownButton({
  maxSecondNum,
  txt,
  loadingTxt,
  disabledTxt,
  onClick,
  ...rest
}: CountdownButtonType): JSX.Element;
export default CountdownButton;
