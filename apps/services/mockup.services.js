const Repository = require('./../repositories/mockupv2.repository')
const mockUpHelper = require('./../helper/mockup.helper')
const Validation = require('./../validations/mocks.validation')
const requestHelper = require('../helper/request.helper')
const mocks = {}
/**
 * @description listisng all data from repository
 * @param callback
 */
mocks.lists = (callback) => {
  Repository.find((err, docs) => {
    callback(err, docs)
  })
}
/**
 * @description paginate the repository
 * @param paging
 * @param callback
 */
mocks.pagination = (paging, callback) => {
  Repository.pagination(paging, (err, data) => {
    return callback(err, data)
  })
}
/**
 * @desc for storing new mock
 * @param body
 * @param callback
 */
mocks.store = (body, callback) => {
  let mockValidation = new Validation()
  mockValidation.beforeInsert(body, (err, errValidation) => {
    if (errValidation) {
      return callback(null, errValidation, null)
    }
    let model = new Repository(body)
    model.save().then(data => {
      return callback(null, null, data)
    }).catch(reason => {
      return callback(reason, null, null)
    })
  }).catch(reason => {
    return callback(reason, null, null)
  })
}
/**
 * @desc for showing data
 * @param id
 * @param callback
 */
mocks.show = (id, callback) => {
  Repository.findById(id).lean().then(collection => {
    if (collection == null) {
      return callback(null, null)
    }
    return callback(null, collection)
  }).catch(reason => {
    return callback(reason, null)
  })
}
/**
 * @desc for update the data
 * @param id
 * @param body
 * @param callback
 */
mocks.update = (id, body, callback) => {
  Repository.findOneAndUpdate({ _id: id }, body, { new: true }).lean().then(collection => {
    return callback(null, collection)
  }).catch(reason => {
    return callback(reason, null)
  })
}
/**
 * @desc for delete collection
 * @param id
 * @param callback
 */
mocks.delete = (id, callback) => {
  Repository.deleteOne({ _id: id }).then(collection => {
    return callback(null, collection)
  }).catch(reason => {
    return callback(reason, null)
  })
}

/**
 * @description describe the mock
 * @param path
 * @param callback
 */
mocks.desc = (path, callback) => {
  Repository.findOne({
    '_path': path
  }, (err, data) => {
    callback(err, data)
  })
}
/**
 * @description load mock by path and extract the property
 * @param path
 * @param method
 * @param req
 * @param callback
 */
mocks.mock = (path, method, req, callback) => {
  Repository.findOne({
    '_path': path,
    '_method': method
  }).lean().then(async (data) => {
    if (data === null || data === undefined) {
      return callback(null, 200, 'mockup not found')
    } else {
      if (requestHelper.itsDefined(data._header) && data._header !== null && data._header.length !== 0) {
        let header = await mockUpHelper.transformHeader(data._header, req.headers)
        if (header != null) {
          return callback(null, header.httpCode, header.result)
        }
      }
      if (requestHelper.itsDefined(data._header) && data._body !== null && !requestHelper.isEmptyObject(data._body)) {
        let body = await mockUpHelper.transformBody(data._body, req.body)
        if (body !== null) {
          return callback(null, body.httpCode, body.result)
        }
      }
      return callback(null, data._defaultResponse.throw.httpCode, data._defaultResponse.throw.result)
    }
  }).catch(reason => {
    return callback(reason, null, null)
  })
}

module.exports = mocks
