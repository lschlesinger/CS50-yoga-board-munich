package edu.cs50.yoga.yogaboard.repository;

import edu.cs50.yoga.yogaboard.model.YogaClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface YogaClassRepository extends JpaRepository<YogaClass, String> {
}
