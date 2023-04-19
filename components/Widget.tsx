import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import { WidgetEvents } from './WidgetEvents';

export const Widget = () => {
  const widgetConfig: WidgetConfig = {
    // It can be either standard, expandable, or drawer
      // set source chain to Polygon
  fromChain: 56,
  // set destination chain to Optimism
  toChain: 56,
  // set source token to USDC (Polygon)
  fromToken: '0x55d398326f99059fF775485246999027B3197955',
  // set source token to USDC (Optimism)
  toToken: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  // set source token amount to 10 USDC (Polygon)
  fromAmount: 10,
    variant: 'expandable',
    integrator: '1'
  };
  return (
    <>
      <WidgetEvents />
      <LiFiWidget
        config={widgetConfig}
        integrator="nextjs-example"
      />
    </>
  );
};
