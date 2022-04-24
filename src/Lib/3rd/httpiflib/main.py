
from .utils import Request
from .route import get_func
def process_request(req: Request):
    func = get_func(req.uri)
    resp = func(req)
    return resp

