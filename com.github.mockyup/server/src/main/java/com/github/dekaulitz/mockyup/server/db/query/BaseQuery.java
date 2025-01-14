package com.github.dekaulitz.mockyup.server.db.query;


import java.util.HashSet;
import java.util.Set;
import lombok.Setter;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.util.CollectionUtils;

public abstract class BaseQuery<P extends Pageable> {

  protected Set<Criteria> criteriaSet = new HashSet<>();
  @Setter
  protected Pageable pageable;

  public abstract void buildQuery(P p);

  public Query getQuery() {
    if (CollectionUtils.isEmpty(criteriaSet)) {
      return new Query();
    }
    Criteria[] criteriaArray = criteriaSet.toArray(new Criteria[0]);
    return new Query().addCriteria(new Criteria().andOperator(criteriaArray));
  }

  public Query getQueryWithPaging() {
    if (CollectionUtils.isEmpty(criteriaSet)) {
      return new Query().with(pageable);
    }
    Criteria[] criteriaArray = criteriaSet.toArray(new Criteria[0]);
    return new Query().addCriteria(new Criteria().andOperator(criteriaArray)).with(pageable);
  }
}
