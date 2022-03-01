/// <reference types="react" />
import './index.less';
interface RankListProps {
  data: {
    label: string;
    value: string | number;
  }[];
}
declare function RankList({ data }: RankListProps): JSX.Element;
export default RankList;
