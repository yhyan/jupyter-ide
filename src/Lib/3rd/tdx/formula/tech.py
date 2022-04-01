### 通达信指标公式
import tdx


def MACD(CLOSE, SHORT = 12, LONG = 26, MID = 9):
    DIF = tdx.EMA(CLOSE, SHORT) - tdx.EMA(CLOSE, LONG)
    DEA = tdx.EMA(DIF, MID)
    MACD = (DIF-DEA) * 2
    return (DIF, DEA, MACD)


def KDJ_(CLOSE, LOW, HIGH, N = 9, M1 = 3, M2 = 3):
    RSV = (CLOSE - tdx.LLV(LOW, N)) / (tdx.HHV(HIGH, N) - tdx.LLV(LOW, N)) * 100
    K = tdx.SMA(RSV, M1, 1)
    D = tdx.SMA(K, M2, 1)
    J = 3 * K - 2 * D
    return (K, D, J)

### KDJ 比 KDJ_ 算法效率高
def KDJ(CLOSE, LOW, HIGH, N = 9, M1 = 3, M2 = 3):
    T1 = tdx.LLV(LOW, N)
    K = (CLOSE - T1) / (tdx.HHV(HIGH, N) - T1) * 100
    K.SMA(M1, 1)
    D = tdx.SMA(K, M2, 1)
    J = 3 * K - 2 * D
    return (K, D, J)


def CCI(CLOSE, LOW, HIGH, N = 14):
    TYP = (HIGH + LOW + CLOSE) / 3.
    return (TYP - tdx.MA(TYP, N)) *1000. / (15. * tdx.AVEDEV(TYP, N))