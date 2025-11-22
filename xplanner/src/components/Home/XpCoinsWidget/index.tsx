'use client';

import { Coins, Zap } from 'lucide-react';
import * as S from './styles';

interface XpCoinsWidgetProps {
  balanceBtc?: number;
}

export function XpCoinsWidget({ balanceBtc = 0 }: XpCoinsWidgetProps) {
  return (
    <S.Container>
      <S.WidgetContent>
        <S.CoinInfo>
          <S.CoinIconWrapper>
            <Coins className="w-6 h-6 text-black" />
          </S.CoinIconWrapper>
          <div>
            <S.Label>XP Coins Virtual</S.Label>
            <S.Balance>{balanceBtc} XPC</S.Balance>
          </div>
        </S.CoinInfo>
        <Zap className="w-5 h-5 text-amber-500" />
      </S.WidgetContent>
    </S.Container>
  );
}