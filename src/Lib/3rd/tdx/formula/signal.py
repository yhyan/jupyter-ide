### 通达信专家公式
import tdx
import tdx.formula.tech as tech

def MACD(CLOSE, SHORT = 12, LONG = 26, MID = 9):
    '''
    1.DIF、DEA均为正，DIF向上突破DEA，买入信号。
    2.DIF、DEA均为负，DIF向下跌破DEA，卖出信号。
    3.DEA线与K线发生背离，行情反转信号。
    4.分析MACD柱状线，由红变绿(正变负)，卖出信号；由绿变红，买入信号
    '''
    DIF = tdx.EMA(CLOSE, SHORT) - tdx.EMA(CLOSE, LONG)
    DEA = tdx.EMA(DIF, MID)
    return tdx.CROSS(DIF, DEA) # 1-买入  -1-卖出


def KDJ(CLOSE, LOW, HIGH, N = 9, M1 = 3, M2 = 3):
    '''
    1.指标>80时，回档机率大；指标<20时，反弹机率大；
    2.K在20左右向上交叉D时，视为买进信号；
    3.K在80左右向下交叉D时，视为卖出信号；
    4.J>100时，股价易反转下跌；J<0时，股价易反转上涨；
    5.KDJ波动于50左右的任何信号，其作用不大。
    '''
    K, D, J = tech.KDJ(CLOSE, LOW, HIGH, N, M1, M2)
    return tdx.CROSS(J, 0).IFEQ(-1, 0) + tdx.CROSS(100, J).IFEQ(1, -1, 0) # 1-买入 -1-卖出


def CCI(CLOSE, LOW, HIGH, N = 14):
    TYP = tech.KDJ(CLOSE, LOW, HIGH)
    return tdx.CROSS(TYP, -100).IFEQ(-1, 0) + tdx.CROSS(100, TYP).IFEQ(1, -1, 0) # 1-买入 -1-卖出


def BIAS(CLOSE, N = 14, LL = 6, LH = 6):
    BIAS = tdx.BIAS(CLOSE - tdx.MA(CLOSE,N)) / tdx.MA(CLOSE,N) * 100
    return tdx.CROSS(-LL, BIAS).IFEQ(-1, 0) + tdx.CROSS(BIAS, LH).IFEQ(1, -1, 0) # 1-买入 -1-卖出


def MA(CLOSE, SHORT = 5, LONG = 20):
    return tdx.CROSS(tdx.MA(CLOSE,SHORT), tdx.MA(CLOSE,LONG)) # 1-买入 -1-卖出

def EXPMA(CLOSE, SHORT = 12, LONG = 50):
    return tdx.CROSS(tdx.EMA(CLOSE,SHORT), tdx.EMA(CLOSE,LONG)) # 1-买入 -1-卖出


def KD(CLOSE, LOW, HIGH, N = 9, M1 = 3, M2 = 3):
    WRSV = (CLOSE-tdx.LLV(LOW,N))/(tdx.HHV(HIGH,N)-tdx.LLV(LOW,N))*100
    WK = tdx.SMA(WRSV,M1,1)
    D = tdx.SMA(WK,M2,1)
    return tdx.CROSS(WK, D).IFEQ(tdx.IFLESS(WK, 20, 1, 999), 1).IFEQ(tdx.IFLARGE(WK, 80, -1, 999), -1)
