/**
 * Created by Freeman on 2016/12/21.
 */
import createReactClass from 'create-react-class';
import TabBarMixin from './TabBarMixin';
const TabBar = createReactClass({
  displayName: 'TabBar',
  mixins: [TabBarMixin],
  render() {
    const tabs = this.getTabs();
    return this.getRootNode(tabs);
  }
})

export default TabBar;